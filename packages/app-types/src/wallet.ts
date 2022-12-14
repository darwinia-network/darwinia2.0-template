import { ContractInterface } from "ethers";
import { Web3Provider, JsonRpcSigner } from "@ethersproject/providers";
import { Contract } from "@ethersproject/contracts";

export type SupportedWallet = "MetaMask";
export type SupportedBrowser = "Chrome" | "Firefox" | "Brave" | "Edge" | "Opera";
export type ChainName = "Crab" | "Pangolin" | "Darwinia" | "Pangoro";

export interface Token {
  address: string;
  symbol: string;
  decimals: number;
  logo?: string;
}

export interface ChainConfig {
  name: ChainName; // this name is used to set the chain name in MetaMask, the user will later see this name on Metamask
  displayName: string; // This name is used on the dApp just for the user to see
  chainId: number;
  ring: Token;
  kton: Token;
  explorerURL: [string];
  rpcURL: [string];
  contractInterface: ContractInterface;
  contractAddress: string;
}

export interface WalletExtension {
  browser: SupportedBrowser;
  downloadURL: string;
}

export interface WalletConfig {
  name: SupportedWallet;
  logo: string;
  extensions: WalletExtension[];
}

export interface WalletError {
  code: number;
  message: string;
}

export interface WalletCtx {
  provider: Web3Provider | undefined;
  signer: JsonRpcSigner | undefined;
  contract: Contract | undefined;
  isConnecting: boolean;
  isWalletConnected: boolean;
  connectWallet: () => void;
  addKTONtoWallet: () => void;
  error: WalletError | undefined;
  selectedAccount: string | undefined;
}
