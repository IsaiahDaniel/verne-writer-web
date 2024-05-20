type PillsProps = {
    text: string,
    [x: string]: any;
    selectedPill: boolean;
}

const Pills = ({ text, selectedPill, ...props }: PillsProps) => {
  return (
    <div 
    className={`border border-[#919191] px-3 py-1  ${selectedPill ? "text-white" : "text-[#767676]"} rounded-md ${selectedPill && "bg-[#006969]"}`}
    { ...props } 
    >
        {text}
    </div>
  )
}

export default Pills