interface Props {
    selectedGender: string;
    onCheckboxChange: (gender: "male" | "female") => void;
}

function GenderCheckbox({selectedGender, onCheckboxChange}: Props) {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text'>Male</span>
                <input 
                    type='checkbox' 
                    className='checkbox border-slate-900' 
                    checked={selectedGender === "male"}
                    onChange={() => onCheckboxChange("male")} 
                />
            </label>
        </div>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text'>Female</span>
                <input 
                    type='checkbox' 
                    className='checkbox border-slate-900'
                    checked={selectedGender === "female"}
                    onChange={() => onCheckboxChange("female")}     
                />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox