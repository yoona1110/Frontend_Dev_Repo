import styled from "styled-components";
import PropTypes from "prop-types";
import DeleteImage from "../../assets/images/x-circle.png";
import InputForm from "../InputForm.jsx";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 2px 4px 0px #00000040;
  z-index: 99;
`;

const ModalWrapper = styled.div`
  width: 321px;
  height: 469px;
  position: relative;
  border-radius: 5px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalHeader = styled.div`
  font-family: Nanum Gothic;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
  margin-top: 20px;
`;

const KeywordContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const StyledDeleteButton = styled.img`
  margin-right: 5px;
`;

const AddButton = styled.div`
  width: 274px;
  height: 27px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #D94A56;
  background: #ffffff;
  cursor: pointer;
`;

const AddButtonText = styled.span`
  font-family: Nanum Gothic;
  font-size: 16px;
  color: #D94A56;
`;

const ConfirmButton = styled.div`
  width: 100%;
  height: 60px;
  padding: 12px 16px 12px 24px;
  border-radius: 0px 0px 5px 5px;
  gap: 10px;
  background: #d94a56;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ConfirmText = styled.p`
  font-family: Nanum Gothic;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: left;
  margin: 0;
  color: #ffffff;
`;

const ModalSubtext = styled.p`
  font-family: Nanum Gothic;
  font-size: 10px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #D94A56;
`;

const KeywordInputModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <ModalHeader>메모</ModalHeader>
        <ModalSubtext>최대 5키워드, 한 키워드 당 8자까지 가능합니다.</ModalSubtext>
        <KeywordContainer>
          <StyledDeleteButton src={DeleteImage} />
          <InputForm />
        </KeywordContainer>
        <AddButton>
          <AddButtonText>추가하기</AddButtonText>
        </AddButton>
        <ConfirmButton onClick={onClose}>
          <ConfirmText>확인</ConfirmText>
        </ConfirmButton>
      </ModalWrapper>
    </ModalOverlay>
  );
};

KeywordInputModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default KeywordInputModal;
