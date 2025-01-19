'use client'
import { Button, Form, Typography } from 'antd';
import { FC, useState } from 'react';
import { BackButton, useShowPopup } from '@vkruglikov/react-telegram-web-app';

const BackButtonDemo: FC = () => {
  const [buttonState, setButtonState] = useState<{
    show: boolean;
  }>({show: true});
 

  return (
    <>
      <Typography.Title level={3}>BackButton</Typography.Title>
     
      <div>
        {buttonState?.show && (
          <BackButton
            onClick={() => window.history.back()}
          />
        )}
      </div>
    </>
  );
};
export default BackButtonDemo;