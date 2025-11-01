import { Brand } from '../components/molecules/Brand';
import { Text } from '../components/atoms/Text';
import { SearchBar } from '../components/molecules/SearchBar';
export const Export = () => {
  return (
    <>
      <Brand />
      <Text variant="small-regular">Your one-stop shop for fashion!</Text>
      <Text variant="paragraph-semibold">
        Discover the latest trends and timeless styles.
      </Text>
      <SearchBar />
    </>
  );
};
