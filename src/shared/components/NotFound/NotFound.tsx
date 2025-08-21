import { memo } from 'react';
import { Button, Result } from 'antd';
const NotFound = () => {
  return (
    <>
    <div className="container ">
      <div className='mt-[50px]'>
    <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary">Back Home</Button>}
  />
      </div>
    </div>
    </>
  );
};

export default memo(NotFound);