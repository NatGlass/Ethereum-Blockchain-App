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
                    className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
                    <p className="text-white text-base font-semibold">Connect Wallet</p>
                </button>
                )}
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Message" name="message" type="text" handleChange={handleChange} />
        
            <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
                >
                Send
            </button>
            </>
    )
}

export default Form
