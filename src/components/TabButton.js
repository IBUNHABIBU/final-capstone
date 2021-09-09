import React, { useState } from 'react';

const TabButton = (props) => {
  const { index, btnNumber, content } = props;
  const [tab, setTab] = useState(1);
  const toggleTab = (index) => {
    setTab(index);
  };
  return (
    <div>
      <button onClick={() => toggleTab(index)} className={ tab=== btnNumber ? 'nav-link active' : 'nav-link'} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">{content}</button>
    </div>
  );
};
TabButton.propTypes = {
 ind
}
export default TabButton;
