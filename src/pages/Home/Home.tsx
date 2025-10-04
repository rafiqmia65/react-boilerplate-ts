import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
      <ModeToggle></ModeToggle>
    </div>
  );
};

export default Home;
