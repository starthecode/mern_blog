import React from 'react';
import SliderForm from '../../components/DashComponents/Slider/SliderComp';
import PageHead from '../../components/DashComponents/PageHead';
import PublishPanel from '../../components/DashComponents/PublishPanel';
import TextEditor from '../../components/TextEditor';

export const Post = () => {
  const [title, setTitle] = React.useState('home');

  return (
    <form>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <PageHead title={title} setTitle={setTitle} />
          <TextEditor />
          <SliderForm />
        </div>
        <div>
          <PublishPanel />
        </div>
      </div>
    </form>
  );
};
