import CommonInput from "../common-input";

const formTypes = {
    INPUT : 'input',
    SELECT : 'select',
    TEXTAREA : 'textarea',
};


function CommonForm({
    formControls = [],
    formData, 
    setFormData,      
 }){

    function renderFormElement(getCurrentElement){

        let content = null;

        switch (getCurrentElement?.componentType) {
            case formTypes.INPUT:
            
            content = <CommonInput 
            label={getCurrentElement.label} 
            name={getCurrentElement.name} 
            id={getCurrentElement.id}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            onChange={(event)=> 
                setFormData({
                ...formData,
                [event.target.name]: event.target.value,
                })
             }
            />
            
                break;
            
                default:
                    break;
        }
        return content;
    }
    return (
        <form>
            {
                formControls?.length 
                ? formControls.map(singleFormElementItem => 
                    renderFormElement({singleFormElementItem})
                )
                : null}
        </form>
    );
}

export default CommonForm;