import fs from 'fs/promises';

async function updateDependencyVersion() {
  try {
    // 获取当前工作目录下的 package.json
    const sitePackagePath = './package.json';

    // 读取当前项目的 package.json
    const sitePackageContent = await fs.readFile(sitePackagePath, 'utf8');
    const sitePackageJson = JSON.parse(sitePackageContent);

    // 获取 @d-matrix/icons-react 的最新版本
    const iconsReactPackagePath = '../../node_modules/@d-matrix/icons-react/package.json';
    const iconsReactPackageContent = await fs.readFile(iconsReactPackagePath, 'utf8');
    const iconsReactPackageJson = JSON.parse(iconsReactPackageContent);
    const latestVersion = iconsReactPackageJson.version;

    // 更新 @d-matrix/icons-site 中的依赖版本
    if (sitePackageJson.dependencies && sitePackageJson.dependencies['@d-matrix/icons-react']) {
      console.log(`当前 @d-matrix/icons-react 版本: ${sitePackageJson.dependencies['@d-matrix/icons-react']}`);
      console.log(`最新 @d-matrix/icons-react 版本: ${latestVersion}`);

      // 更新版本号
      sitePackageJson.dependencies['@d-matrix/icons-react'] = latestVersion;

      // 写入更新后的 package.json
      await fs.writeFile(sitePackagePath, JSON.stringify(sitePackageJson, null, 2), 'utf8');

      console.log('✅ 依赖版本更新成功！');
    } else {
      console.log('⚠️ 未找到 @d-matrix/icons-react 依赖');
    }
  } catch (error) {
    console.error('❌ 更新依赖版本时出错:', error);
  }
}

// 执行函数
updateDependencyVersion();
