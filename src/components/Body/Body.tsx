import HomePage from "@/pages/HomePage/HomePage.tsx";

export interface BodyProps {
  readonly className?: string;
}

const Body = ({ className }: BodyProps) => {
  return (
    <div className={`${className}`}>
      <HomePage></HomePage>
    </div>
  );
};

export default Body;
