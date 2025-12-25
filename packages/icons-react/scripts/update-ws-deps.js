import fs from 'fs/promises';

async function updateDependencyVersion() {
  try {
    // 获取当前工作目录下的 package.json
    const iconReactPackagePath = './package.json';

    // 读取当前项目的 package.json
    const iconReactPackageContent = await fs.readFile(iconReactPackagePath, 'utf8');
    const iconReactPackageJson = JSON.parse(iconReactPackageContent);

    // 获取 @d-matrix/icons-svg 的最新版本
    const iconsSvgPackagePath = '../../node_modules/@d-matrix/icons-svg/package.json';
    const iconsReactPackageContent = await fs.readFile(iconsSvgPackagePath, 'utf8');
    const iconsReactPackageJson = JSON.parse(iconsReactPackageContent);
    const latestVersion = iconsReactPackageJson.version;

    // 更新 @d-matrix/icons-react 中的依赖版本
    if (iconReactPackageJson.dependencies && iconReactPackageJson.dependencies['@d-matrix/icons-svg']) {
      console.log(`当前 @d-matrix/icons-svg 版本: ${iconReactPackageJson.dependencies['@d-matrix/icons-svg']}`);
      console.log(`最新 @d-matrix/icons-svg 版本: ${latestVersion}`);

      // 更新版本号
      iconReactPackageJson.dependencies['@d-matrix/icons-svg'] = latestVersion;

      // 写入更新后的 package.json
      await fs.writeFile(iconReactPackagePath, JSON.stringify(iconReactPackageJson, null, 2), 'utf8');

      console.log('✅ 依赖版本更新成功！');
    } else {
      console.log('⚠️ 未找到 @d-matrix/icons-svg 依赖');
    }
  } catch (error) {
    console.error('❌ 更新依赖版本时出错:', error);
  }
}

// 执行函数
updateDependencyVersion();
