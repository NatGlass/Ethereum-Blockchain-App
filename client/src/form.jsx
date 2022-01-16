import React, { useContext } from 'react'
import { TransactionContext} from './context/transactionContext'

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
    />
);


const Form = () => {
    const { connectWallet, currentAccount, formData, sendTransaction, handleChange } = useContext(TransactionContext);

    const handleSubmit = (e) => {
        const { addressTo, amount, message } = formData;
        e.preventDefault();
        if (!addressTo || !amount || !message) return;
        sendTransaction();
    }

    return (
        <>
            {!currentAccount && (
                <button
                    type="button"
                    onClick={connectWallet}
                    >
                    <p>Connect Wallet</p>
                </button>
                )}
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Message" name="message" type="text" handleChange={handleChange} />
        
            <button
                type="button"
                onClick={handleSubmit}
                >
                Send
            </button>
            </>
    )
}

export default Form
