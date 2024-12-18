const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.bound,
		C3.Behaviors.Physics,
		C3.Plugins.Mouse,
		C3.Plugins.Text,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.RotateTowardPosition,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Mouse.Cnds.IsButtonDown,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Mouse.Cnds.OnRelease,
		C3.Behaviors.Physics.Acts.ApplyImpulseAtAngle,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.IsGroupActive
	];
};
self.C3_JsPropNameTable = [
	{ballX: 0},
	{ballY: 0},
	{BoundToLayout: 0},
	{Physics: 0},
	{ball: 0},
	{aimBlock: 0},
	{Mouse: 0},
	{aimRotation: 0},
	{backboard: 0},
	{goal: 0},
	{goalPhysics: 0},
	{distanceToLaunch: 0},
	{shotPower_lbl: 0},
	{scored: 0},
	{score_lbl: 0},
	{score: 0},
	{distanceToAimBlock: 0},
	{shotPower: 0},
	{Score: 0},
	{distanceToGoal: 0}
];

self.InstanceType = {
	ball: class extends self.ISpriteInstance {},
	aimBlock: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	aimRotation: class extends self.ITextInstance {},
	backboard: class extends self.ISpriteInstance {},
	goal: class extends self.ISpriteInstance {},
	goalPhysics: class extends self.ISpriteInstance {},
	distanceToLaunch: class extends self.ITextInstance {},
	shotPower_lbl: class extends self.ITextInstance {},
	scored: class extends self.ISpriteInstance {},
	score_lbl: class extends self.ITextInstance {},
	score: class extends self.ITextInstance {}
}