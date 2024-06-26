import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  ADD_NEW_FRUIT,
  MODIFY_FRUIT,
  fruitProp,
} from "../reduxComponent/slice";
import { useDispatch } from "react-redux";
import styled from "styled-components";

function FruitModal({
  status,
  setStatus,
  showModal,
  setShowModal,
  fruitInfo,
  setFruitInfo,
  onInfoChange,
}: {
  status: string;
  setStatus: (status: string) => void;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  fruitInfo: fruitProp;
  setFruitInfo: (fruit: fruitProp) => void;
  onInfoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const dipatch = useDispatch();
  const handleClose = () => {
    if (status === "Modify") {
      setStatus("Add");
      setFruitInfo({
        id: "",
        name: "",
        brand: "",
        price: 0,
        numberAvailable: 0,
        numberSold: 0,
      });
    }
    setShowModal(false);
  };

  return (
    <>
      {/* @ts-ignore */}
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <ModalWarp>
          {/* @ts-ignore */}
          <Modal.Header closeButton>
            {/* @ts-ignore */}
            <Modal.Title>{`${status} New Item`}</Modal.Title>
          </Modal.Header>
          {/* @ts-ignore */}
          <Modal.Body>
            <ContentWarp>
              <label>name of Item:</label>
              <input
                name="name"
                type="text"
                placeholder="name"
                value={fruitInfo.name}
                onChange={onInfoChange}
              />
              <label>name of Brand:</label>
              <input
                name="brand"
                type="text"
                placeholder="brand"
                value={fruitInfo.brand}
                onChange={onInfoChange}
              />
              <label>price of Item:</label>
              <input
                name="price"
                type="text"
                placeholder="price"
                value={fruitInfo.price}
                onChange={onInfoChange}
              />
              <label>number of Item:</label>
              <input
                name="numberAvailable"
                type="text"
                placeholder="number available"
                value={fruitInfo.numberAvailable}
                onChange={onInfoChange}
              />
            </ContentWarp>
          </Modal.Body>
          {/* @ts-ignore */}
          <Modal.Footer>
            {/* @ts-ignore */}
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            {/* @ts-ignore */}
            <Button
              variant="primary"
              onClick={() => {
                status === "Add"
                  ? dipatch(
                      ADD_NEW_FRUIT({
                        name: fruitInfo.name,
                        brand: fruitInfo.brand,
                        price: fruitInfo.price,
                        numberSold: 0,
                        numberAvailable: fruitInfo.numberAvailable,
                      })
                    )
                  : dipatch(
                      MODIFY_FRUIT({
                        id: fruitInfo.id,
                        name: fruitInfo.name,
                        brand: fruitInfo.brand,
                        price: fruitInfo.price,
                        numberAvailable: fruitInfo.numberAvailable,
                      })
                    );
                setFruitInfo({
                  id: "",
                  name: "",
                  brand: "",
                  price: 0,
                  numberAvailable: 0,
                  numberSold: 0,
                });
                status === "Modify" && setStatus("Add");
                setShowModal(false);
              }}
            >
              {status}
            </Button>
          </Modal.Footer>
        </ModalWarp>
      </Modal>
    </>
  );
}

export default FruitModal;

const ModalWarp = styled.div`
  border-radius: 6px;
`;
const ContentWarp = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-auto-flow: row;
`;
