

## Plan: Remove Surveys and Fullscreen

### Changes

1. **`src/pages/Index.tsx`** — Remove all survey/gate logic and fullscreen:
   - Remove `GateForm` import, `supabase` import, `toast` import
   - Remove state: `completedGates`, `activeGate`, `pendingSlide`, `hasActiveOperation`, `allAnswers`, `contactInfo`
   - Remove `sendSurvey`, `handleGateComplete`, `SLIDE_TO_GATE`, `gateLabels`
   - Simplify `tryNavigate` to just set direction and slide (no gate checks)
   - Remove `toggleFullscreen` function
   - Remove "f"/"F" key handler
   - Remove `toggleFullscreen` from `useEffect` deps
   - Remove `onFullscreen` prop from `NavigationControls`
   - Remove GateForm modal rendering

2. **`src/components/presentation/NavigationControls.tsx`** — Remove fullscreen button:
   - Remove `onFullscreen` prop and `Maximize2` import
   - Remove the fullscreen button from the top-right controls

3. **`src/components/presentation/GateForm.tsx`** — Delete file (no longer needed)

4. **`supabase/functions/send-survey/index.ts`** — Delete edge function (no longer needed)

