import React from 'react';
import styles from './index.module.scss';

interface WorkCardProps {
  // TODO: Propsの型を定義してください
}

const WorkCard: React.FC<WorkCardProps> = (props) => {
  return (
    <div className={styles.container}>
      {/* TODO: WorkCard コンポーネントの実装 */}
      <p>WorkCard works!</p>
    </div>
  );
};

export default WorkCard;
