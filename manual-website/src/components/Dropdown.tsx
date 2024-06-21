import React, { useState } from 'react';

const Dropdown = () => {
    const [selected, setSelected] = useState('選択してください');

    return (
        <div>
            <select onChange={(e) => setSelected(e.target.value)} value={selected}>
                <option value="選択してください">選択してください</option>
                <option value="オプション1">オプション1</option>
                <option value="オプション2">オプション2</option>
                <option value="オプション3">オプション3</option>
            </select>
            <p>選択された項目: {selected}</p>
        </div>
    );
};

export default Dropdown;
