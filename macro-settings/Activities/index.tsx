// Components==============
import { useRef, useState } from "react";
import styled from "styled-components";
import { useUser } from "../../firebase/useUser";
import Block from "../../micro-components/Block";
import { useOnClickOutside } from "../../micro-components/useOnClickOutside";
import AddActivity from "./AddActivity";
import { deleteActivity } from "./deleteActivity";
import StylePicker from "./StylePicker";
// =========================

type props = {};

type activity = {
  activityNumber: string;
  activity: {
    activity: string;
    style: number;
  };
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr;
  justify-items: start;
  margin-bottom: ${({ theme: { spacing } }) => spacing[3]};

  p {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  button {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    margin-left: ${({ theme: { spacing } }) => spacing[0]};
  }
`;

const Activity = ({ activity, activityNumber }: activity) => {
  const [showPicker, setShowPicker] = useState(false);
  const { user } = useUser();

  const ref = useRef(null!);
  useOnClickOutside(ref, () => setShowPicker(false), showPicker);

  return (
    <Grid ref={ref}>
      <div
        onClick={() =>
          showPicker ? setShowPicker(false) : setShowPicker(true)
        }
      >
        <Block style={activity.style !== undefined ? activity.style : 0} />
      </div>
      <Flex>
        <p>{activity.activity}</p>
        <button onClick={() => deleteActivity(activityNumber, user?.uid)}>
          <svg width="17" height="17" viewBox="0 0 20 20">
            <path
              d="M14.2426 15.6568L10 11.4142L5.75736 15.6568L4.34315 14.2426L8.58579 9.99996L4.34315 5.75732L5.75736 4.3431L10 8.58575L14.2426 4.3431L15.6569 5.75732L11.4142 9.99996L15.6569 14.2426L14.2426 15.6568Z"
              fill="#1A1A1A"
            />
          </svg>
        </button>
      </Flex>

      {showPicker && (
        <StylePicker
          setShowPicker={setShowPicker}
          activityNumber={activityNumber}
        />
      )}
    </Grid>
  );
};

export default function Activities({}: props) {
  const { user } = useUser();

  const activities = user?.activities.map((e, index) => {
    const activityNumber = Object.entries(user?.completeActivities)
      .sort()
      .map((r) => {
        return r[0];
      })[index];

    return (
      <Activity activity={e} key={index} activityNumber={activityNumber} />
    );
  });

  return (
    <>
      {activities}
      <AddActivity />
    </>
  );
}
