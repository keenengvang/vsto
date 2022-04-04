import { Button, SearchInput, TextInputField } from 'evergreen-ui';
import { useState } from 'react';
import './SearchWallet.scss';

function SearchWallet() {
  const [value, setValue] = useState('');

  return (
    <div className="vsto-search-wallet">
      <section className="vsto-search-wallet-input-container">
        <SearchInput
          className="search-input-box"
          onChange={(e: any) => setValue(e.target.value)}
          value={value}
        />
        <Button
          className="search-input-button"
          appearance="primary"
          size="large"
        >
          Search Wallet
        </Button>
      </section>
    </div>
  );
}

export default SearchWallet;
