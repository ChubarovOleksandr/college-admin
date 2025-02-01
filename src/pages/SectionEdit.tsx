import '../style/pages/SectionEdit.scss';

const SectionEdit = () => {

  return <div className="section-edit">
    <h1>Редагування вкладок</h1>
    <div className="editing-block">
      <label>
        Додати вкладку
        <input type="text" className='default-input'/>
      </label>
    </div>
  </div>
};

export default SectionEdit;
