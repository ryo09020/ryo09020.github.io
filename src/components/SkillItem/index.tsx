import React from 'react';
import styles from './index.module.scss';

interface SkillItemProps {
  // TODO: Propsの型を定義してください
}

const SkillItem: React.FC<SkillItemProps> = (props) => {
  return (
    <div className={styles.container}>
      {/* TODO: SkillItem コンポーネントの実装 */}
      <p>SkillItem works!</p>
    </div>
  );
};

export default SkillItem;
