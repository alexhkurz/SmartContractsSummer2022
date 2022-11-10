import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';

function Native({ nativeBalance, address }) {
    return (
        <div>
            <h3>Wallet: {address}</h3>
            <h3>Native Balance: {nativeBalance} ETH</h3>
        </div>
    );
}

export async function getServerSideProps(context) {
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

    const address = '0xcA8Fa8f0b631EcdB18Cda619C4Fc9d197c8aFfCa';

    const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
        chain: EvmChain.ETHEREUM,
        address,
    });

    return {
        props: { address, nativeBalance: nativeBalance.result.balance.ether },
    };
}

export default Native;