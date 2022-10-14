import { SolidGlyphs } from "src/components/icon/types";

type PropTypes = {
  name: SolidGlyphs;
  size?: number;
};

export const Icon = ({ name, size = 24 }: PropTypes) => (
  <svg
    height={`${size}px`}
    width={`${size}px`}
    viewBox={`0 0 ${size} ${size}`}
    className={name}
  >
    <use href={`/icons.svg#${name}`} />
  </svg>
);
