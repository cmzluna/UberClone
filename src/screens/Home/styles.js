import {Text} from 'react-native';
import styled from 'styled-components';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const TextComp = styled(Text)`
  color: blue;
`;

export default {SafeAreaView, TextComp};
