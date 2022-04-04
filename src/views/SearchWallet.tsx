import { Button, SearchInput, TextInputField } from 'evergreen-ui';
import { useState } from 'react';
import './SearchWallet.scss';
import logo from '../assets/logo.svg';

function SearchWallet() {
  const [value, setValue] = useState('');

  return (
    <div className="vsto-search-wallet">
      <header className="vsto-search-wallet-header">
        <img className="vsto-search-wallet-header-logo" src={logo} alt="Logo" />
      </header>
      <section className="vsto-search-wallet-input-container">
        <SearchInput
          className="search-input-box"
          placeholder="Enter eth wallet address..."
          onChange={(e: any) => setValue(e.target.value)}
          value={value}
        />
        <Button
          className="search-input-button"
          appearance="primary"
          size="large"
        >
          Submit
        </Button>
      </section>
    </div>
  );
}

export default SearchWallet;
