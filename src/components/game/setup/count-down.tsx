interface CountDownProps {
  count: number;
}
const CountDown = ({ count }: CountDownProps) => {
  return <div>{count}</div>;
};

export default CountDown;
