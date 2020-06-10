// Copyright (C) 2012-present, The Authors. This program is free software: you can redistribute it and/or  modify it under the terms of the GNU Affero General Public License, version 3, as published by the Free Software Foundation. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details. You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React from "react";
import _ from "lodash";
import NumberCard from "./conversation-stats-number-card";

class NumberCards extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div>
        <NumberCard
          datum={data.firstVoteTimes.length}
          subheading="participants voted"
          icon="users"
        />
        <NumberCard datum={data.voteTimes.length} subheading="votes were cast" icon="tags" />
        <NumberCard
          datum={(data.voteTimes.length / data.firstVoteTimes.length).toFixed(2)}
          subheading="votes per participant on average"
        />
        <NumberCard datum={data.firstCommentTimes.length} subheading="commented" icon="users" />
        <NumberCard
          datum={data.commentTimes.length}
          subheading="comments submitted"
          icon="comments"
        />
      </div>
    );
  }
}

export default NumberCards;
