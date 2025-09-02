import { useState } from "react";
const Counter = useState(0);
const [count, setCount] = useState(0);
<button onClick={() => setCount(setCount + 1)}></button>;
