import Image from "next/image";
import ScopedStyle from "./index.module.scss";

const Hello = () => {
  return (
    <div className={ScopedStyle["hello"]}>
      Hello World
      <Image
        alt="unsplash"
        width="233"
        height="351"
        sizes="(max-width: 768px) 100vw"
        src={
          "https://images.unsplash.com/photo-1690653628061-04152eb72ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
        }
        crossOrigin='anonymous'
      />
    </div>
  );
};

export default Hello;
