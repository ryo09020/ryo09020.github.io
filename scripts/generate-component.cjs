// scripts/generate-component.js
const fs = require('node:fs'); // Node.js v16以降推奨の書き方 (以前は 'fs')
const path = require('node:path'); // Node.js v16以降推奨の書き方 (以前は 'path')

const componentNameInput = process.argv[2];

if (!componentNameInput) {
  console.error('エラー: コンポーネント名を指定してください。例: MyButton');
  process.exit(1);
}

// コンポーネント名の最初の文字を大文字に、残りを小文字にするか、そのまま活かすかはお好みで。
// ここでは最初の文字を大文字にし、残りはそのままにします。
const componentName = componentNameInput.charAt(0).toUpperCase() + componentNameInput.slice(1);

const componentDir = path.join('src', 'components', componentName);

// ディレクトリが既に存在するかチェック
if (fs.existsSync(componentDir)) {
  console.error(`エラー: ディレクトリ ${componentDir} は既に存在します。`);
  process.exit(1);
}

// ディレクトリ作成
try {
  fs.mkdirSync(componentDir, { recursive: true });
} catch (err) {
  console.error(`エラー: ディレクトリ ${componentDir} の作成に失敗しました。`, err);
  process.exit(1);
}

// index.tsx の雛形
const tsxTemplate = `import React from 'react';
import styles from './index.module.scss';

interface ${componentName}Props {
  // TODO: Propsの型を定義してください
}

const ${componentName}: React.FC<${componentName}Props> = (props) => {
  return (
    <div className={styles.container}>
      {/* TODO: ${componentName} コンポーネントの実装 */}
      <p>${componentName} works!</p>
    </div>
  );
};

export default ${componentName};
`;

// index.module.scss の雛形
const scssTemplate = `/* ${componentName} コンポーネントのスタイル */
.container {
  /* TODO: スタイルを記述してください */
}
`;

// ファイル作成
try {
  fs.writeFileSync(path.join(componentDir, 'index.tsx'), tsxTemplate);
  fs.writeFileSync(path.join(componentDir, 'index.module.scss'), scssTemplate);
  console.log(`コンポーネント ${componentName} が ${componentDir} に作成されました。`);
} catch (err) {
  console.error(`エラー: ファイルの作成に失敗しました。`, err);
  process.exit(1);
}