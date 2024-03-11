import type { MetaFunction } from "@remix-run/node";
import React from 'react';
import { BrowserRouter as BrowserRouterClient } from 'react-router-dom';
import Head from '~/components/Head';
import Education from "~/components/Education";
import Welcome from "~/components/Welcome";
import Aboutme from "~/components/Aboutme";
import Skills from "~/components/Skills";
import Experience from "~/components/Experience";
import Publications from "~/components/Publications";
import Portfolio from "~/components/Portfolio";

// Check if window object is available (meaning it's running in the browser)
const isBrowser = typeof window !== 'undefined';

// Only import BrowserRouter on the client side
const BrowserRouter = isBrowser ? BrowserRouterClient : React.Fragment;

export const meta: MetaFunction = () => {
    return [
        { title: "Lu Guo Portfolio" },
        { name: "description", content: "Welcome to Lu Guo's Portfolio!" },
    ];
};

export default function Index() {
    return (
        <div>
            <Head/>
            <Welcome/>
            <Aboutme/>
            <Education/>
            <Experience/>
            <Skills/>
            <Publications/>
            <Portfolio/>
        </div>
    );
}