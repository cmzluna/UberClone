import styled from 'styled-components';
import {Pressable, View, Image, Text} from 'react-native';
import {Icon} from '@rneui/themed';

const Wrapper = styled(Pressable)`
  height: 120px;
  background-color: #ffefc7;
  padding: 0px;
  margin: 12px;
  width: 50%;
  border: 1px solid #efc865;
  border-radius: 10px;
`;

const CarWrapper = styled(View)`
  flex: 1;
  background-color: ${({pressed}) => (pressed ? '#efc865' : '#ffefc7')};
  padding: 5px;
  align-items: center;
`;

const ImageComp = styled(Image)`
  flex: 1;
  width: 120px;
  height: 100px;
  color: blue;
`;

const TextComp = styled(Text)``;

const IconComp = styled(Icon)`
  width: 50px;
  color: white;
  border-radius: 20px;
  background-color: #efc865;
  margin-top: 0px;
`;

export default {Wrapper, CarWrapper, ImageComp, TextComp, IconComp};
