type moonIconProps = {
  className: string;
};

export const MoonIcon = ({ className }: moonIconProps) => {
  return (
    <div className={className}>
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M52.2642 45.634C47.0293 52.0839 39.1296 56 30.5156 56C15.0474 56 2.51562 43.4613 2.51562 28C2.51562 12.5316 15.0544 0 30.5156 0C32.2302 0.000279597 33.9411 0.15686 35.6273 0.467797C40.4421 1.35712 41.508 7.78159 37.2703 10.1933C32.745 12.7684 29.8947 17.5665 29.8947 22.8629C29.8947 31.9983 38.1989 38.8836 47.2057 37.1683C51.9844 36.2581 55.3562 41.8243 52.2642 45.634ZM34.6736 5.63041C33.3254 5.38136 31.9359 5.25 30.5156 5.25C17.9512 5.25 7.76562 15.4355 7.76562 28C7.76562 40.5645 17.9512 50.75 30.5156 50.75C37.6503 50.75 44.0168 47.4648 48.1879 42.3255C35.9804 44.6504 24.6447 35.315 24.6447 22.8629C24.6447 15.4787 28.6843 9.03886 34.6736 5.63041Z"
          fill="#304859"
        />
        <mask id="mask0_0_3404" maskUnits="userSpaceOnUse" x="2" y="0" width="52" height="56">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M52.2642 45.634C47.0293 52.0839 39.1296 56 30.5156 56C15.0474 56 2.51562 43.4613 2.51562 28C2.51562 12.5316 15.0544 0 30.5156 0C32.2302 0.000279597 33.9411 0.15686 35.6273 0.467797C40.4421 1.35712 41.508 7.78159 37.2703 10.1933C32.745 12.7684 29.8947 17.5665 29.8947 22.8629C29.8947 31.9983 38.1989 38.8836 47.2057 37.1683C51.9844 36.2581 55.3562 41.8243 52.2642 45.634ZM34.6736 5.63041C33.3254 5.38136 31.9359 5.25 30.5156 5.25C17.9512 5.25 7.76562 15.4355 7.76562 28C7.76562 40.5645 17.9512 50.75 30.5156 50.75C37.6503 50.75 44.0168 47.4648 48.1879 42.3255C35.9804 44.6504 24.6447 35.315 24.6447 22.8629C24.6447 15.4787 28.6843 9.03886 34.6736 5.63041Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_0_3404)">
          <rect width="56" height="56" fill="#304859" />
        </g>
      </svg>
    </div>
  );
};