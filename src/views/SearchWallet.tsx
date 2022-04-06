import { useState } from 'react';
import './SearchWallet.scss';
import logo from '../assets/logo.svg';
import {
  Button,
  Flex,
  ProgressCircle,
  SearchField,
  Text,
  View
} from '@adobe/react-spectrum';
import { useMoralisWeb3Api } from 'react-moralis';
import { useNavigate } from 'react-router-dom';

function SearchWallet() {
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const Web3Api = useMoralisWeb3Api();
  const options: any = { address: '0x...' };

  const getWalletNFTs = async (value: any) => {
    options.address = value;
    await Web3Api.account
      .getNFTs(options)
      .then(function (nfts) {
        setLoading(false);
        navigate(`/wallet/${value}`);
      })
      .catch(function (error) {
        setLoading(false);
        console.log(error);
      });
  };

  const onSearchSubmit = () => {
    setLoading(true);
    getWalletNFTs(searchValue);
  };

  return (
    <div className="vsto-search-wallet">
      <header className="vsto-search-wallet-header">
        <img className="vsto-search-wallet-header-logo" src={logo} alt="Logo" />
      </header>
      <section className="vsto-search-wallet-input-container">
        <Flex gap="size-100" alignItems="center" wrap isHidden={loading}>
          <SearchField
            placeholder="Enter eth wallet address..."
            width={{ base: 'size-2400', S: 'size-6000' }}
            onClear={() => setSearchValue('')}
            onChange={setSearchValue}
            onSubmit={() => onSearchSubmit()}
            value={searchValue}
          />
          <Button
            variant="primary"
            isDisabled={searchValue === ''}
            isHidden={loading}
            onPress={() => onSearchSubmit()}
          >
            Submit
          </Button>
        </Flex>
        <Flex gap="size-100" alignItems="center" wrap isHidden={!loading}>
          <ProgressCircle aria-label="Loading…" isIndeterminate />
        </Flex>
      </section>
    </div>
  );
}

export default SearchWallet;
