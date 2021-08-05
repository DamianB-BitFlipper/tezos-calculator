import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import ContractSelector from 'components/ContractSelector';

import calculatorData from 'data/calculator.json';

export default function Home({ contracts }) {
    const router = useRouter();
    const [contractAddress, setContractAddress] = useState('');

    useEffect(() => {
        if (!contracts || !contracts.length) {
            return;
        }
        setContractAddress(contracts[0].address);
    }, [contracts]);

    return (<ContractSelector
            onSubmit={handleConnect}
            value={contractAddress}
            onChange={setContractAddress}
            options={contracts}
            />
           );

    async function handleConnect() {
        router.push(`/${contractAddress}`);
    }
}

export function getStaticProps() {
    return { props: { contracts: calculatorData.contracts } };
}
