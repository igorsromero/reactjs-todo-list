import { KeyboardEvent, useState } from 'react';
import * as C from './styles';

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === 'Enter' && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    }

    return (
        <C.Container>
            <div className="image">➕</div>
            <input
                type="text"
                placeholder="Adicione uma tarefa"
                onKeyUp={handleKeyUp}
                onChange={e => setInputText(e.target.value)}
                value={inputText}
            />
        </C.Container>
    );
}