import { useEffect } from 'react';
import { useRouter } from 'next/router';

import useBeacon from 'hooks/use-beacon';
import calculatorData from 'data/calculator.json';

import Calculator from 'components/Calculator';


export default function AddressPage() {
    const router = useRouter();
    const { address } = router.query;
    const { connect, pkh } = useBeacon();

    useEffect(() => {
        connect();
    }, [connect]);

    if (!pkh) {
        return null;
    }

    return <Calculator contractAddress={address} userAddress={pkh} />;
}
