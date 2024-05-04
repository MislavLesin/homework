import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/');
  }
  return (
    <div className=" h-[65px] cursor-pointer bg-black" onClick={handleClick}>
      <h1 className="p-[15px] text-[30px] tracking-widest text-stone-50">
        MYBESTBRANDS
      </h1>
    </div>
  );
}
