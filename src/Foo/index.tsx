import React from 'react';
import classNames from 'classnames';
import './style/index.less';
import { getPrefixCls } from '@/_utils/index';

export type TFooProps = {
  title: string;
  className?: string;
  prefixCls?: string;
};

const Foo: React.FC<TFooProps> = ({
  title,
  className,
  prefixCls: customizePrefixCls,
}) => {
  const prefixCls = getPrefixCls('foo', customizePrefixCls);

  return (
    <>
      <h1 className={classNames(prefixCls, className)}>{title}</h1>
    </>
  );
};

Foo.displayName = 'Foo';
export default Foo;
