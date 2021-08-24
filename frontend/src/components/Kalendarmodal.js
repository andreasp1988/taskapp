import { useState } from 'react';

const Kalendarmodale = () => {
   const [reveals, changeReveals] = useState(false);

   function toggle() {
      changeReveals(!reveals);
   }
   return {
      reveals,
      toggle,
   };
};

export default Kalendarmodale;
