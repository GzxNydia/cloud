---
title: Modal
nav:
  order: 2
  title: 组件

group:
  order: 2
  title: 通用
---

## Modal

Demo:

```tsx
/**
 * title: Button
 * desc: 不依赖三方 UI 库的 button 组件
 */

import React from 'react';
import { Modal } from 'cloudaccount';

const ModalDemo: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <button onClick={() => setVisible(true)}>click me</button>
      <Modal
        maskClosable
        visible={visible}
        onClose={() => setVisible(false)}
        canDrag
      >
        <div className="your-content">
          <button onClick={() => setVisible(false)}>click me</button>
        </div>
      </Modal>
    </>
  );
};

export default ModalDemo;
```

## API

| 属性           | 说明                                                        | 类型                                           | 默认值   |
| -------------- | ----------------------------------------------------------- | ---------------------------------------------- | -------- |
| visible        | 可选，控制 popup 显隐                                       | boolean                                        | false    |
| position       | 可选，内容定位                                              | 'center' / 'top' / 'bottom' / 'left' / 'right' | 'center' |
| mask           | 可选，控制蒙层显隐                                          | boolean                                        | true     |
| maskClosable   | 可选，点击蒙层是否可以关闭                                  | boolean                                        | false    |
| onClose        | 可选，关闭函数，若 maskClosable 为 true，点击蒙层调用该函数 | function                                       | ()=>{}   |
| node           | 可选，元素挂载节点                                          | HTMLElement                                    | -        |
| destroyOnClose | 可选，关闭是否卸载内部元素                                  | boolean                                        | false    |
| wrapClassName  | 可选，自定义 Popup 外层容器类名                             | string                                         | ''       |
