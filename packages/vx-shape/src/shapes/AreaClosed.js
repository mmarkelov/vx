import cx from 'classnames';
import { area } from 'd3-shape';
import PropTypes from 'prop-types';
import React from 'react';

AreaClosed.propTypes = {
  innerRef: PropTypes.func
};

export default function AreaClosed({
  x,
  y,
  y0,
  xScale,
  yScale,
  data,
  defined = () => true,
  className,
  strokeDasharray,
  strokeWidth = 2,
  stroke = 'black',
  fill = 'rgba(0,0,0,0.3)',
  curve,
  innerRef,
  ...restProps
}) {
  const path = area()
    .x((...args) => xScale(x(...args)))
    .y0(y0 || yScale.range()[0])
    .y1((...args) => yScale(y(...args)))
    .defined(defined);
  if (curve) path.curve(curve);
  return (
    <g>
      <path
        ref={innerRef}
        className={cx('vx-area-closed', className)}
        d={path(data)}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        fill={fill}
        {...restProps}
      />
    </g>
  );
}
