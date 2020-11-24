import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getPrefixCls } from '@/_utils/index';
import Portal from './portal';
import './style/index.less';

export type Position = 'top' | 'right' | 'bottom' | 'left' | 'center';

type PopupPropsWithoutChildren = {
  node?: HTMLElement;
} & typeof defaultProps;

export type PopupProps = React.PropsWithChildren<PopupPropsWithoutChildren>;

// Popup默认属性
export const defaultProps = {
  visible: false,
  position: 'center' as Position,
  mask: true,
  maskClosable: false,
  onClose: () => {},
  destroyOnClose: false,
  wrapClassName: '',
  canDrag: false,
};

const Modal: React.FC<PopupProps> = props => {
  const {
    node,
    mask,
    maskClosable,
    onClose,
    wrapClassName,
    position,
    children,
    visible,
  } = props;
  const firstRenderRef = React.useRef(false);

  if (!firstRenderRef.current && !visible) return null;
  if (!firstRenderRef.current) {
    firstRenderRef.current = true;
  }

  const prefixCls = getPrefixCls('modal');

  // 蒙层点击事件
  const onMaskClick = () => {
    if (maskClosable) {
      console.log('object');
      onClose && onClose();
    }
  };

  // 拼接容器节点类名
  const rootCls = classnames(
    prefixCls,
    wrapClassName,
    `${prefixCls}__${position}`,
  );

  // 拼接蒙层节点类名
  const maskCls = classnames(`${prefixCls}-mask`, {
    [`${prefixCls}-mask__visible`]: mask,
  });

  // 拼接内容节点类名
  const contentCls = classnames(
    `${prefixCls}-content`,
    `${prefixCls}-content__${position}`,
  );

  return (
    <Portal node={node}>
      {visible && (
        <div className={rootCls}>
          <div className={maskCls} onClick={onMaskClick}></div>
          <div className={contentCls}>{children}</div>
        </div>
      )}
    </Portal>
  );
};

Modal.defaultProps = defaultProps;
Modal.displayName = 'Modal';
export default Modal;
