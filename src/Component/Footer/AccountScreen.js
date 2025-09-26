// AccountScreen.js
import React from 'react';
import { FONT_FAMILY, SIZES } from '../styles';

const AccountScreen = () => (
    <div style={{ padding: SIZES.padding, fontFamily: FONT_FAMILY.sans }}>
        <h1>Account & Settings</h1>
        <p>This is the profile and settings area for the user.</p>
    </div>
);

export default AccountScreen;