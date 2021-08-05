import { useCallback, useState } from 'react';

import { TezosToolkit } from '@taquito/taquito';

export const RPC_URL = 'https://florence-tezos.giganode.io';

const options = {
  name: 'Tezos Israel',
};

export const Tezos = new TezosToolkit(RPC_URL);

export default function useBeacon() {
  const [pkh, setUserPkh] = useState();
  const connect = useCallback(async () => {
    const { BeaconWallet } = await import('@taquito/beacon-wallet');
    const wallet = new BeaconWallet(options);

    Tezos.setProvider({ wallet });

    await wallet.requestPermissions({
      network: {
        type: 'custom',
        rpcUrl: RPC_URL,
      },
    });

    setUserPkh(await wallet.getPKH());
  }, []);

  return { connect, pkh };
}
