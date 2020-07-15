/* @author yanjun.zsj
 * @date 2018.11
*/
import React from 'react';
import { LineProps } from './types';

const iconSize = [18, 18];
class Line extends React.Component<LineProps, null> {
  constructor(props) {
    super(props);
  }

  removeHandle = (edit): void => {
    if (edit) {
      this.props.removeRelation(this.props.data);
    }
  }

  mouseOver = (edit): void => {
    if (edit) {
      this.props.toTop(this.props.data);
    }
  }

  render(): React.ReactElement {
    const {
      startX = 0,
      startY = 0,
      endX = 0,
      endY = 0,
      currentRelation,
      data,
      edit,
      closeIcon
    } = this.props;
    return <g
      className={`path-end ${currentRelation === data ? "active" : ""} ${edit ? '' : 'disabled'}`}
      onMouseOver={this.mouseOver.bind(edit)}
      onClick={this.removeHandle.bind(edit)}
    >
      <circle className="line-circle line-circle-start" cx={`${startX}`} cy={`${startY}`} r="6"/>
      <path
        className="line"
        d={`M${startX}, ${startY} L${endX}, ${endY}`}
        markerEnd="url(#markerArrow)"
      />
      <image
        className="icon-remove"
        x={(endX + startX - iconSize[0]) / 2}
        y={(endY + startY - iconSize[1]) / 2}
        width={iconSize[0]}
        height={iconSize[1]}
        xlinkHref={closeIcon || "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzg4OCIgZD0iTTEzLjk1IDMuNDE0TDEyLjUzNiAyIDggNi41MzYgMy40NjQgMiAyLjA1IDMuNDE0IDYuNTg2IDcuOTUgMi4wNSAxMi40ODVsMS40MTQgMS40MTRMOCA5LjM2NGw0LjUzNiA0LjUzNSAxLjQxNC0xLjQxNEw5LjQxNCA3Ljk1eiIvPjwvc3ZnPg=="} />
        <circle className="line-circle line-circle-end" cx={`${endX}`} cy={`${endY}`} r="6"/>
    </g>;
  }
}

export default Line;
