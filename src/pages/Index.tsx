import React, { useState } from "react";
import { Calendar } from "../component";

const Index = () => {

    return (
        <Calendar selectedStartDate={null} selectedEndDate={null} onDateSelect={function (date: Date): void {
            throw new Error("Function not implemented.");
        }} />
    );
};

export default Index;
