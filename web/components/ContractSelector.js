import PropTypes from 'prop-types';
import Image from 'next/image';

export default function ContractSelector({
  onSubmit,
  value,
  onChange,
  options,
}) {
  return (
    <div className="connect-section flex justify-center items-center h-full flex-col">
      <div className="form-group flex  flex-col mb-5 text-center">
        <div className="logo mb-4">
          <Image src="/logo_blue.svg" width="84" height="178" alt="tezos logo"/>
        </div>
        <label className="text-md mb-3 text-left text-gray-700">
          Select Contract Address
        </label>
        <select
          defaultValue={value}
          onChange={(e) => onChange(e.target.value)}
          className="rounded-md px-4 py-3 bg-gray-800 text-white"
        >
          {options.map((item) => {
            return (
              <option value={item.address} key={item.address}>
                {item.lang}: {item.address}
              </option>
            );
          })}
        </select>
      </div>
      <button
        className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-md px-4 py-2"
        onClick={onSubmit}
      >
        Connect Wallet
      </button>
    </div>
  );
}

ContractSelector.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({ lang: PropTypes.string, address: PropTypes.string })
  ),
};
