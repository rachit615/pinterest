export default function StarSVG({ fill = false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill ? "gold" : "none"}
      stroke="gold"
      strokeWidth="2"
      width="24"
      height="24"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5.18 5.05L17.91 22 12 18.27 6.09 22 7.18 14.32 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
